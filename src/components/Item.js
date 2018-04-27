import React from 'react';

function itemImg(image) {
    return <img class="itemName" alt={image.description} src={image.url} />;
};

function itemDesc(description) {
    return <p class="desc">{description.desc}</p>;
}

function itemByline(byline) {
    return <p class="byline">{byline.author}</p>;
}

function ItemAPI() {
    return (
        <div>
            <div class="itemImg">
                <itemImg description="this is a test description and test image" url="###"/>
            </div>
        </div>
    )
}

export default ItemAPI;

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
  
//   function App() {
//     return (
//       <div>
//         <Welcome name="Sara" />
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//       </div>
//     );
//   }
  
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );