import React, { useEffect, useState } from "react";
import styles from "styles/components/ArchivedItem__ImgCarousel.module.css";

export default function ArchivedItem__ImgCarousel({
  images,
  archiveId,
  itemIdx,
}) {
  // Offset
  const [offset, setOffset] = useState(0);

  // Method
  // offset을 조정해서 Carousel Element 왼쪽 이동
  const moveLeft = () => {
    if (offset > -70 * (images.length - 1)) {
      setOffset(offset - 70);
    }
  };
  // offset을 조정해서 Carousel Element 오른쪽 이동
  const moveRight = () => {
    if (offset < 0) {
      setOffset(offset + 70);
    }
  };

  // Effect
  // offset 조정 시 실제로 이동
  // offset 에 따라 이동 버튼 활성화
  useEffect(() => {
    const carousel = document.querySelectorAll(
      `#archive_${archiveId}_${itemIdx} > div > div > img`
    );
    carousel.forEach(element => {
      element.style.left = `${offset}vw`;
    });

    const leftArrow = document.querySelector(
      `#archive_${archiveId}_${itemIdx}_leftArrow`
    );
    const rightArrow = document.querySelector(
      `#archive_${archiveId}_${itemIdx}_rightArrow`
    );

    if (images.length > 1) {
      if (offset >= 0) {
        leftArrow.style.display = "none";
        rightArrow.style.display = "inline";
      } else if (offset <= -70 * (images.length - 1)) {
        rightArrow.style.display = "none";
        leftArrow.style.display = "inline";
      } else {
        leftArrow.style.display = "inline";
        rightArrow.style.display = "inline";
      }
    } else {
      leftArrow.style.display = "none";
      rightArrow.style.display = "none";
    }
  }, [offset, images.length, archiveId, itemIdx]);

  return (
    <div className={styles.ArchivedItem__ImgCarousel}>
      <div className={styles.ImgCarousel_images}>
        {images.map((image, img_idx) => (
          <img
            className={styles.ImgCarousel_image}
            src={image}
            alt="archive_img"
            key={img_idx}
          />
        ))}
      </div>

      <img
        className={`${styles.carouselArrow} ${styles.carouselArrow__left}`}
        src="/images/left-arrow.png"
        alt="left_arrow"
        onClick={moveRight}
        id={`archive_${archiveId}_${itemIdx}_leftArrow`}
      />
      <img
        className={`${styles.carouselArrow} ${styles.carouselArrow__right}`}
        src="/images/right-arrow.png"
        alt="right_arrow"
        onClick={moveLeft}
        id={`archive_${archiveId}_${itemIdx}_rightArrow`}
      />
    </div>
  );
}
