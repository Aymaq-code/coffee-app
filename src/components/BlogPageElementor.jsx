import Button from "./Button";

export default function BlogPageElementor() {
  return (
    <div className="blogPageEltr">
      <div className="blogPageEltr__contents">
        <div className="blogPageEltr__contents-text">
          <h2>Start Ordering Now, Delivery Never Been Easier</h2>
          <p>
            Get coffee delivery to your doorstep from thousands of amazing local
            and national restaurants. Find the meal you crave and order coffee
            from restaurants easily.
          </p>
          <Button type={"secondary"}>
            {" "}
            <img
              src="/assets/blogPage-images/download-icon.svg"
              alt="download-icon"
            />
            Download Now
          </Button>
        </div>
        <div className="blogPageEltr__contents-images">
          <img
            src="/assets/blogPage-images/img5.png"
            className="img1"
            alt="img1"
          />
          <img
            src="/assets/blogPage-images/img6.png"
            className="img2"
            alt="img2"
          />
          <img
            src="/assets/blogPage-images/img7.png"
            className="img3"
            alt="img3"
          />

          <img
            src="/assets/blogPage-images/img8.png"
            className="img4"
            alt="img4"
          />
        </div>
      </div>
    </div>
  );
}
