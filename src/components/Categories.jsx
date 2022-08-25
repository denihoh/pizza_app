import React from "react";

function Categories() {
  const [indexCategory, setIndexCategory] = React.useState(0);
  const onClickCategory = (index) => {
    setIndexCategory(index);
  };
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={indexCategory === index ? "active" : ""}
          >
            {value}
          </li>
        ))}
        {/* {categories.map((el) => (
         
        ))} */}
      </ul>
    </div>
  );

  return (
    <div className="categories">
      <ul>
        {/* <li
          onClick={() => onClickCategory(0)}
          className={indexCategory === 0 ? "active" : ""}
        >
          Все
        </li>
        <li
          onClick={() => onClickCategory(1)}
          className={indexCategory === 1 ? "active" : ""}
        >
          Мясные
        </li>
        <li
          onClick={() => onClickCategory(2)}
          className={indexCategory === 2 ? "active" : ""}
        >
          Вегетарианская
        </li>
        <li
          onClick={() => onClickCategory(3)}
          className={indexCategory === 3 ? "active" : ""}
        >
          Гриль
        </li>
        <li
          onClick={() => onClickCategory(4)}
          className={indexCategory === 4 ? "active" : ""}
        >
          Острые
        </li>
        <li
          onClick={() => onClickCategory(5)}
          className={indexCategory === 5 ? "active" : ""}
        >
          Закрытые
        </li> */}
      </ul>
    </div>
  );
}
export default Categories;
