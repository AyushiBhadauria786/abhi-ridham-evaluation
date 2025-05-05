export interface field {
    label?: string
    name: string
    placeholder?: string
    type: 'text' | 'textarea' | "date" | 'number'
    validation?: object
}

export interface section {
    title: string
    fields: field[];
}


const Section: section[] = [
    {
        title: "Profiles",
        fields: [
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
                placeholder: "https://github.com/johndoe",
                type: "text",
                validation: {
                    required: "Website is required",
                }
            }
        ]
    },


    {
        title: "Experience",
        fields: [
            {
                label: "Company",
                name: "Company",
                type: "text",
                validation: {
                    required: "Company is required",
                }
            },
            {
                label: "Position",
                name: "Position",
                type: "text",
                validation: {
                    required: "Position is required",
                }
            },
            {
                label: "Date",
                name: "Date",
                type: "text",
                validation: {
                    required: "Date is required",
                }
            },
            {
                label: "Location",
                name: "Location",
                type: "text",
            },
            {
                label: "Website",
                name: "Website",
                placeholder: "https://github.com/johndoe",
                type: "text",
                validation: {
                    required: "Website is required",
                }
            },
            {


                label: "Summary",
                name: "summary",
                type: "textarea",
              
            }


        ]
    },

    {
        title : "Education",
        fields : [
            {
                label: "Institution",
                name: "Institution",
                type: "text",
                validation: {
                    required: "Institution is required",
                }
            },
            {
                label: "Area of Study",
                name: "Area of Study",
                type: "text",
                validation: {
                    required: "Area of Study is required",
                }
            },
            {
                label: "Score",
                name: "Score",
                placeholder : "9.2 GPA",
                type: "text",
                validation: {
                    required: "Score is required",
                }
            },
            {
                label: "Date",
                name: "text",
                type: "text",
                validation: {
                    required: "Date is required",
                }
            },
            {
                label: "Website",
                name: "Website",
                placeholder: "https://github.com/johndoe",
                type: "text",
                validation: {
                    required: "Website is required",
                }
            }, 
            {
                label: "Summary",
                name: "summary",
                type: "textarea",
                
            }
        ]
    },



    {
        title : "Skills",
        fields : [
            {
                label: "Name",
                name: "Name",
                type: "text",
                validation: {
                    required: "Name is required",
                }
            },
            {
                label: "Description",
                name: "Description",
                type: "text",
                validation: {
                    required: "Description is required",
                }
            },
            {
                label: "Keywords",
                name: "Keywords",
                type: "text",
              
            }
        ]
    },



    {
        title : "Languages",
        fields : [
            {
                label: "Name",
                name: "Name",
                type: "text",
                validation: {
                    required: "Name is required",
                } 
            },
            {
                label: "Description",
                name: "Description",
                type: "text",
                validation: {
                    required: "Description is required",
                }
            }
        ]
    },





    {
        title : "Projects",
        fields : [
            {
                label: "Name",
                name: "Name",
                type: "text",
                validation: {
                    required: "Name is required",
                }
            },
            {
                label: "Description",
                name: "Description",
                type: "text",
                validation: {
                    required: "Description is required",
                }
            },
            {
                // label: "Date",
                name: "Date",
                type: "date",
                validation: {
                    required: "Date is required",
                }
            },
            {
                label: "Website",
                name: "Website",
                placeholder: "https://github.com/johndoe",
                type: "text",
                validation: {
                    required: "Website is required",
                }
            },
            {
                label: "Summary",
                name: "summary",
                type: "textarea",
             
            },
            {
                label: "Keywords",
                name: "Keywords",
                type: "text",
               
            }
        ]
    }

]


export default Section;