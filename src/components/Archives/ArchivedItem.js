import React from "react";
import styles from "styles/components/ArchivedItem.module.css";
import ArchivedItemImgCarousel from "./ArchivedItem__ImgCarousel";

function ArchivedItem({ archive }) {
  // Method
  // Toggle Item
  const showItem = event => {
    const target = event.target.getAttribute("value");
    const scrollHeight = Array.from(
      document.querySelectorAll(`#${target} > div > div`)
    ).reduce((acc, curr) => acc + curr.scrollHeight + 5, 0);

    const itemHeight = document.querySelector(`#${target} > div`).style.height;

    if (itemHeight) {
      document.querySelector(`#${target} > div`).style.height = null;
    } else {
      document.querySelector(`#${target} > div`).style.height = `${
        scrollHeight + 1
      }px`;
    }
  };

  return (
    <div className={styles.Archived_item} id={`archive_${archive.id}`}>
      <h3
        className={styles.Archived_item__title}
        onClick={showItem}
        value={`archive_${archive.id}`}
      >
        - {archive.title}
      </h3>
      <div className={styles.Archived_item__show}>
        {archive.details.map((detail, idx) => (
          <div
            className={styles.Archived_item__detail}
            id={`archive_${archive.id}_${idx}`}
            key={idx}
          >
            <div className={styles.Archived_item__date}>{detail.date}</div>
            <ArchivedItemImgCarousel
              images={detail.images}
              archiveId={archive.id}
              itemIdx={idx}
            />
            <div className={styles.Archived_item__content}>
              {detail.content.split("\n").map((element, idx) => (
                <div key={idx}>{element}</div>
              ))}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArchivedItem;
