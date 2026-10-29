export function WorkshopExample() {
  return (
    <figure className="activity">
      <div className="activity-top">
        <span>EXAMPLE ACTIVITY</span>
        <span>Saving & budgeting</span>
      </div>
      <div className="activity-body">
        <div>
          <p className="eyebrow">Make a plan</p>
          <h2>
            What would you
            <br />
            do with $20?
          </h2>
          <p>
            You have $20 to work with. Decide what you need now and what you
            want to save for later.
          </p>
        </div>
        <div className="activity-plan">
          <div>
            <span>School supplies</span>
            <strong>$8</strong>
          </div>
          <div>
            <span>A treat</span>
            <strong>$4</strong>
          </div>
          <div>
            <span>Save for later</span>
            <strong>$8</strong>
          </div>
          <div className="activity-total">
            <span>Total</span>
            <strong>$20</strong>
          </div>
        </div>
      </div>
      <div className="activity-question">
        <span>Now something changes.</span>
        <p>You need another $3 for supplies. How would you adjust your plan?</p>
      </div>
      <figcaption>
        Illustrative HTML activity based on the lesson concept.
      </figcaption>
    </figure>
  );
}
