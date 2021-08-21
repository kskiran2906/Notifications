function Notification(props) {
  const { style, image, content } = props;
  return (
    <div className={style}>
      <img src={image} className="n-img" />
      <p className="n-title">{content}</p>
    </div>
  );
}

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Notifications</h1>
    <div className="notification-list">
      <Notification
        style="notification n-1"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        content="Information Message"
      />
      <Notification
        style="notification n-2"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        content="Success Message"
      />
      <Notification
        style="notification n-3"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        content="Warning Message"
      />
      <Notification
        style="notification n-4"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        content="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
