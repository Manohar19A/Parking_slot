import { useEffect } from "react";
// import Razorpay from 'razorpay';
const CourseCard = ({
  courseName,
  courseThumbnail,
  courseDetails,
  coursePrice,
  courseDiscountedPrice,
  courseDiscount,
}) => {
    const displayRazorpay=()=>{
        axios.post("http://localhost:5000/razorpay",options).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const razor = new Razorpay({
        key_id: 'rzp_test_KVTDG6XTCw70wz',
        key_secret: 'SHJxp68rOeq6Nz5cWWaeS7MH',
      });
  const options = {
    key: "rzp_test_KVTDG6XTCw70wz",
    currency: "INR",
    amount: 499,
    name: "Learning To Code Online",
    description: "Test Wallet Transaction",
    image: "http://localhost:1337/logo.png",
    order_id: 1,
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "CHIMATA MANOHAR",
      email: "anirudh@gmail.com",
      contact: "9908816733",
    },
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  return (
    <article className="card">
      <img src={courseThumbnail} alt={courseName} />
      <div className="card-content">
        <header className="card-header">
          <h5>{courseName}</h5>
        </header>
        <p>{courseDetails}</p>
        <h4>
          ₹{courseDiscountedPrice}{" "}
          <span className="course-price">₹{coursePrice}</span>{" "}
          <span className="course-discount-percentage">
            {courseDiscount}% OFF
          </span>
        </h4>
        <button
          type="button"
          onClick={displayRazorpay}
          className="course-payment-button"
        >
          Buy Now
        </button>
      </div>
    </article>
  );
};
export default CourseCard;
