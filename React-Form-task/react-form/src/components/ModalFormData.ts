import { FormField } from "../types/type"
import { SectionName } from "../types/type";

interface ModalSection {
    Name: Exclude<SectionName, 'Basics'>; 
    data: FormField[];
}

export const ModalFormData: ModalSection[] = [
    {
        Name: "Profiles",
        data: [ 
            {
                label: "Network",
                name: "network",
                placeholder: "GitHub",
                type: "text",
                validation: {
                    required: "Network is required",
                }
            },
            {
                label: "Username",
                name: "username",
                placeholder: "john.doe",
                type: "text",
                validation: {
                    required: "Username is required",
                }
            },
           
            {
                label: "Website",
                name: "website",
                placeholder: "https://github.com/profilename",
                type: "url",
                validation: {
                    required: "Website url is required",
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
                    required: "Position is required",
                }
            },
            {
                label: "Date or Date Range",
                name: "dateRange",
                placeholder: "March 2023 - Present",
                type: "text",
                validation: {
                    required: "Date range is required",
                }
            },
            {
                label: "Location",
                name: "location",
                type: "text",
                validation: {
                    required: "Location is required"
                }
            },
            {
                label: "Website",
                name: "website",
                placeholder: "Add company website",
                type: "url",
                validation: {
                    required: "Website url is required",
                }
            },
            { 
                label: "Summary",
                name: "summary", 
                type: "text", 
                multiline: true, 
                rows: 4, 
            }
        ]
    },
    {
        Name: "Education",
        data: [
            {
                label: "Institution",
                name:"institute",
                placeholder: "College Name",
                type: "text",
                validation: {
                    required: "Institute Name is required"
                }  
            },
            {
                label: "Degree / Type Of Study",
                name: "studyType",
                placeholder: "BE in Computer Engineerig",
                type: "text",
                validation: {
                    required: "Degree/Study Type is required"
                }
            },
            { 
                label: "Date or Date Range", 
                name: "dateRange", 
                placeholder: "Sept 2018 - May 2022", 
                type: "text", 
                validation: { 
                    required: "Date range is required" 
                } 
            },
            {
                label: "Score / Grade",
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
                label: "Skill Name",
                name: "name",
                placeholder: "JavaScript,Java...",
                type: "text",
                validation: {
                    required: "Skills are required"
                }
            },
            { 
                label: "Level", 
                name: "level", 
                placeholder: "e.g., Advanced or 5/5", 
                type: "text" 
            }
        ]   

    },
    {
        Name: "Projects",
        data: [
            {
                label: "Project Name",
                name: "projectName",
                placeholder: "Task-Management",
                type: "text",
                validation: {
                    required: "Project name is required"
                }

            },
            {
                label: "Description",
                name: "description",
                placeholder: "Add description about project",
                type: "text",
                multiline: true,
                rows: 3 ,
                validation: {
                    required: "Description is required"
                }
            },
            {
                label: "Date or Date Range",
                name: "dateRange",
                placeholder: "March 2023 - Present",
                type: "text",
                validation: {
                    required: "Date is required",
                }
            },
            {
                label: "Project Link",
                name: "website",
                placeholder: "https://github.com/project",
                type: "url",
            }
        ]
    }
 
]