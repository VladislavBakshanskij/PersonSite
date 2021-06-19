import React from 'react';


interface SectionProps {
    body: any
}

const Section: React.FC<SectionProps> = props => {
    return (
        <div className="mb-3">
            {props.body}
        </div>
    );
}

export default Section;
