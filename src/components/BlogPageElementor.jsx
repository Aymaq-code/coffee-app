import Button from "./Button";

export default function BlogPageElementor() {
  return (
    <div className="blogPageEltr">
      <div className="blogPageEltr__contents">
        <div className="blogPageEltr__contents-text">
          <h2>Start Ordering Now – Delivery Has Never Been Easier</h2>
          <p>
            Enjoy freshly brewed coffee delivered straight to your doorstep from
            your favorite local and national cafes. Find your favorite blend and
            order with ease.
          </p>
          <Button type={"secondary"}>
            <img
              src="/public/images/blog/download-svg.svg"
              alt="Download App"
            />
            Download Now
          </Button>
        </div>
        <div className="blogPageEltr__contents-images">
          <img src="/images/blog/img6.png" className="img1" alt="img1" />
          <img src="/images/blog/img7.png" className="img2" alt="img2" />
          <img src="/images/blog/img8.png" className="img3" alt="img3" />

          <img src="/images/blog/img9.png" className="img4" alt="img4" />
        </div>
      </div>
    </div>
  );
}
