import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import globalStyles from "styles/globalStyles.module.css";
import styles from "styles/components/MarkdownRenderer.module.css";

function MarkdownRenderer({ markdown }) {
  // Loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (markdown) {
      setIsLoading(false);
    }
  }, [markdown]);

  return (
    <div>
      {isLoading ? (
        <div className={globalStyles.loader}>
          <span className={globalStyles.loader_text}>Loading...</span>
        </div>
      ) : (
        <div className={styles.MarkdownRenderer}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return inline ? (
                  // 강조 (``)
                  <code
                    style={{
                      background:
                        "linear-gradient( to right, var(--sub-highlight-color) 15%, var(--highlight-color) 85%, var(--sub-highlight-color) )",
                      padding: "2px",
                      borderRadius: "3px",
                    }}
                    {...props}
                  >
                    {children}
                  </code>
                ) : match ? (
                  // 코드 (```)
                  <SyntaxHighlighter
                    style={nord}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <SyntaxHighlighter
                    style={nord}
                    language="textile"
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                );
              },
              // 인용문 (>)
              blockquote({ node, children, ...props }) {
                return (
                  <div
                    style={{
                      background: "#f0f0f0",
                      padding: "1px 15px",
                      borderRadius: "10px",
                    }}
                    {...props}
                  >
                    {children}
                  </div>
                );
              },
              img({ node, ...props }) {
                return (
                  <img
                    style={{ maxWidth: "60vw" }}
                    src={props.src.replace("../../../../public/", "/")}
                    alt="MarkdownRenderer__Image"
                  />
                );
              },
            }}
          >
            {markdown
              .replace(/\n\s\n\s/gi, "\n\n&nbsp;\n\n")
              .replace(/\*\*/gi, "@$_%!^")
              .replace(/\**\*/gi, "/")
              .replace(/@\$_%!\^/gi, "**")
              .replace(/<\/?u>/gi, "*")}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default MarkdownRenderer;
