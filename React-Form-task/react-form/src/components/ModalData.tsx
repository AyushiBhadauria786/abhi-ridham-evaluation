export const ModalFormData = [
    {
        Name: "Profiles",
        data: [ 
            {
                label: "Network",
                name: "Network",
                placeholder: "GitHub",
                type: "text",
                validation: {
                    required: "Network is required",
                }
            },
            {
                label: "Username",
                name: "Username",
                placeholder: "john.doe",
                type: "text",
                validation: {
                    required: "Username is required",
                }
            },
           
            {
                label: "Website",
                name: "Website",
                placeholder: "https://github.com/profilename",
                type: "text",
                validation: {
                    required: "Website is required",
                }
            }
        ]
    },
    {
        Name: "Experience",
        data: [
            {
                label: "Company",
                name: "company",
                type: "text",
                validation: {
                    required: "Company is required",
                }
            },
            {
                label: "Position",
                name: "position",
                type: "text",
                validation: {
                    required: "position is required",
                }
            },
            {
                label: "Date or Date Range",
                name: "Date",
                placeholder: "March 2023 - Present",
                type: "text",
                validation: {
                    required: "Date is required",
                }
            },
            {
                label: "Location",
                name: "location",
                type: "text",
                validation: {
                    required: "location is required"
                }
            },
            {
                label: "Website",
                name: "Website",
                placeholder: "Add company website",
                type: "text",
                validation: {
                    required: "Website is required",
                }
            }
        ]
    },
    {
        Name: "Education",
        data: [
            {
                label: "Institution",
                name:"Institute",
                placeholder: "College Name",
                type: "text",
                validation: {
                    required: "Institute Name is required"
                }  
            },
            {
                label: "Type Of Study",
                name: "Study type",
                placeholder: "Degree",
                type: "text",
                validation: {
                    required: "Degree name is required"
                }
            },
            {
                label: "Score",
                name: "score",
                placeholder: "CGPA",
                type: "text",
                validation: {
                    required: "CGPA is required"
                }
            }
        ]
    },
    {
        Name: "Skills",
        data: [
            {
                lable: "Name",
                name: "Name",
                placeholder: "skills name",
                type: "text",
                validation: {
                    required: "Skills are required"
                }
            },
            {
                lable: "Description",
                name: "description",
                placeholder: "Add description",
                type: "text",
                validation: {
                    required: "description is required"
                }
            },
            {
                label: "Level",
                name: "level",
                placeholder: "between 1 to 5",
                type: "text",
                validation: {
                    required: "level is required"
                }
            }
        ]   

    },
    {
        Name: "Projects",
        data: [
            {
                label: "Name",
                name: "Project Name",
                placeholder: "Poject name",
                type: "text",
                validation: {
                    required: "Project name is required"
                }

            },
            {
                lable: "Description",
                name: "description",
                placeholder: "Add description",
                type: "text",
                validation: {
                    required: "description is required"
                }
            },
            {
                label: "Date or Date Range",
                name: "Date",
                placeholder: "March 2023 - Present",
                type: "text",
                validation: {
                    required: "Date is required",
                }
            },
            {
                label: "Website",
                name: "Website",
                placeholder: "Add company website",
                type: "text",
            },
            {
                label: "Summary",
                name: "summary",
                placeholder: "Add summary about project",
                type: "text",
                validation: {
                    required: "Summary is required",
                }
            }
        ]
    }
 
]