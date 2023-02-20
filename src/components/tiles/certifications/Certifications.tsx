import properties from "../../../resources/properties";
import {Card} from "../../common/Card";

export const Certifications = () => {
    return (
        <Card title={'Certifications'}>
            {properties.certifications.map(cert => <div>{cert.name}</div>)}
        </Card>
    );
};
