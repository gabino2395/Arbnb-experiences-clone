import React from "react";

const Card = (props) => {

  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }
  
  return (
    <>
      <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}

        <img className="card-image" src={`/img/${props.coverImg}`}/>
        {/* <img src="/Group-65.png" alt="" /> */}
        <div className="card-rate">
          <i class=" star bi bi-star-fill"></i>
          <p>
            {props.stats.rating}{" "}
            <span className="soft">
              ({props.stats.reviewCount})
              <span>
                {" "}
                <i class="bi bi-dot"></i>
              </span>{" "}
              {props.country}
            </span>
          </p>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="bold card--price">
          From ${props.price} <span className="soft"> / person</span>
        </p>
      </div>
    </>
  );
};

export default Card;
