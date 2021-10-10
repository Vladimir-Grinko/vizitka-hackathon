import React from "react";
import PropTypes from "prop-types";
import PersonCard from "../components/personCard";

const MainPage = ({ persons, ...rest }) => {
    return (<>
        <h1>Общая информация о группе</h1>
        <p>Мы команда первого потока курса JavaScript Junior Frontend Developer. Команда амбициозных и нацеленных на результат. Несмотря на занятость на основном месте работы, каждый из нас стремится пройти курс, получить максимум знаний и опыта и развить свои навыки программирования.</p>
        <hr/>
          <div className="d-flex justify-content-between">
            {persons.map(person => (
                <PersonCard person={person} key={person._id} {...rest} />
            ))}
        </div>
      </>
    );
};

MainPage.propTypes = {
    persons: PropTypes.array.isRequired
};

export default MainPage;
