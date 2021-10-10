import React, {
    useEffect,
    useState
} from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import ProgressList from "../components/progressList";
import Badge from "../components/badge";
import Button from "../components/button";

const PersonalPage = ({onBookmark}) => {
    const params = useParams();
    const { personId } = params;
    const [person, setPerson] = useState();

    useEffect(() => {
        api.persons.getById(personId).then((data) => setPerson(data));
    }, []);

    if (person) {
        const socials = [];
        Object.entries(person.social).map(function (social, i) {
            socials[i] = <a key={social[0]} href={social[1]}>{social[0]}</a>;
            return socials;
        });
    }

    return (
        <>
            {person &&
                <>
                    <div className="d-flex justify-content-between">
                        <h1><Badge context={person.firstName + person.lastName} color={person.color} status={person.teamLeader}/></h1>
                        <Button color={person.bookmark ? "secondary" : "primary"} nameButt={"Избранное"} clickAction={() => onBookmark(person._id)}/>
                    </div>

                    <img className="image float-sm-none float-md-start me-3" src={person.image} alt={`${person.firstName} ${person.lastName}`} />
                    <p><b>Возраст:</b> {person.age}</p>
                    {person.personInfo &&

                        <p>
                            <b>О себе:</b> {person.personInfo}
                        </p>
                    }
                    <p><b>Социальные сети:</b> {Object.entries(person.social).map(social =>
                        <a target="_blank" className="me-2" key={social[0]} href={social[1]} rel="noreferrer">{social[0]}</a>
                    )}</p>
                    <br/>
                    <ProgressList skills={person.skills}/>

                </>
            }
        </>
    );
};

PersonalPage.propTypes = {};

export default PersonalPage;
