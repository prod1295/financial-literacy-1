// Original illustrative activity preview — not a downloadable resource
// or a claim about a workshop already held. No photos or third-party assets.
export function WorkshopExample() {
  return (
    <figure
      className="workshop-example"
      aria-label="Example activity: plan how to save or spend ten dollars"
    >
      <div className="example-back-sheet" aria-hidden="true" />
      <div className="example-sheet">
        <div className="sheet-heading">
          <span>LET’S TALK ABOUT MONEY</span>
          <span>01</span>
        </div>
        <div className="sheet-content">
          <p className="sheet-label">A little budgeting practice</p>
          <h2>
            You have $10.
            <br />
            What would you
            <br />
            do with it?
          </h2>
          <svg
            className="coin-drawing"
            viewBox="0 0 152 82"
            width="152"
            height="82"
            fill="none"
            aria-hidden="true"
          >
            <ellipse
              cx="40"
              cy="52"
              rx="30"
              ry="13"
              fill="#E8CF95"
              stroke="#A38444"
              strokeWidth="1.4"
            />
            <path
              d="M10 45v8c0 7 13 13 30 13s30-6 30-13v-8"
              fill="#E8CF95"
              stroke="#A38444"
              strokeWidth="1.4"
            />
            <ellipse
              cx="40"
              cy="45"
              rx="30"
              ry="13"
              fill="#F4E5BD"
              stroke="#A38444"
              strokeWidth="1.4"
            />
            <path
              d="M16 41c5-4 14-7 24-7M22 54v7M30 56v7M50 56v7M58 54v7"
              stroke="#A38444"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle
              cx="101"
              cy="33"
              r="29"
              fill="#F4E5BD"
              stroke="#A38444"
              strokeWidth="1.4"
            />
            <circle cx="101" cy="33" r="23" stroke="#A38444" strokeWidth="1" />
            <path
              d="M107 23c-2-2-9-3-12 0-6 6 11 8 11 14 0 6-10 6-14 2M100 18v29"
              stroke="#A38444"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <div className="budget-example">
            <div>
              <span>Save for later</span>
              <span>$4</span>
            </div>
            <div className="budget-track">
              <span className="budget-save" />
            </div>
            <div>
              <span>Spend today</span>
              <span>$6</span>
            </div>
            <div className="budget-track">
              <span className="budget-spend" />
            </div>
          </div>
          <p className="sheet-note">
            There’s more than one way to make a plan.
          </p>
        </div>
        <div className="sheet-footer">
          <span>Think. Talk. Try it out.</span>
          <span>Financial Literacy for Kids</span>
        </div>
      </div>
      <figcaption>An example of the everyday questions we explore.</figcaption>
    </figure>
  );
}
