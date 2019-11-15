import React from "react";
import withContext from "../Consumer";
import styles from "./JobList.module.css";
import SubHeader from "../SubHeader";

function decodeEntities(encodedString) {
    //https://stackoverflow.com/a/44195856
    var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
    var translate = {
        nbsp: " ",
        amp: "&",
        quot: '"',
        lt: "<",
        gt: ">"
    };
    return encodedString
        .replace(translate_re, function(match, entity) {
            return translate[entity];
        })
        .replace(/&#(\d+);/gi, function(match, numStr) {
            var num = parseInt(numStr, 10);
            return String.fromCharCode(num);
        });
}
const JobCard = ({
    jobTitle,
    employerName,
    jobDescription,
    jobUrl,
    locationName
}) => {
    return (
        <div className={styles["card"]}>
            <p className={styles["card-title"]}>{jobTitle}</p>
            <p>
                {" "}
                <strong>From: </strong>
                {employerName}
            </p>
            <p>
                {" "}
                <strong>Description: </strong> {jobDescription}
            </p>
            <p className={styles["card-link"]}>
                <a href={jobUrl} rel="noopener noreferrer" target="_blank">
                    Apply Here
                </a>
            </p>
            <p>
                {" "}
                <strong>Location: </strong>
                {locationName}
            </p>
        </div>
    );
};
const JobList = ({ context }) => {
    const { jobs } = context;

    const JobsWrapper = () => (
        <div>
            <div className={styles["wrapper"]}>
                <SubHeader>Jobs available (100 results)</SubHeader>
                {jobs.map(job => {
                    const {
                        jobId,
                        jobTitle,
                        employerName,
                        jobDescription,
                        jobUrl,
                        locationName
                    } = job;

                    return (
                        <JobCard
                            key={jobId}
                            jobTitle={jobTitle}
                            employerName={employerName}
                            jobDescription={decodeEntities(jobDescription)}
                            locationName={locationName}
                            jobUrl={jobUrl}
                        />
                    );
                })}
            </div>
        </div>
    );
    return jobs ? (
        <div>
            <JobsWrapper />
        </div>
    ) : (
        <span></span>
    );
};

export default withContext(JobList);
