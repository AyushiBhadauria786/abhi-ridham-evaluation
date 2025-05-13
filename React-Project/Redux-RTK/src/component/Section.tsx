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
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Network must contain only alphabets",
                      },
                }
               
            },
            {
                label: "Username",
                name: "Username",
                placeholder: "john.doe",
                type: "text",
                validation: {
                    required: "Username is required",
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Username must contain only alphabets",
                      },
                }
            },
           
            {
                label: "Website",
                name: "Website",
                placeholder: "https://github.com/johndoe",
                type: "text",
                validation: {
                    required: "Website is required",
                    pattern: {
                        value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
                        message: "Website must be valid",
                      },
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
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Company must contain only alphabets",
                      },
                }
            },
            {
                label: "Position",
                name: "Position",
                type: "text",
                validation: {
                    required: "Position is required",
                    pattern: {
                        value:/^[A-Za-z\s]+$/,
                        message: "Position must contain only alphabets",
                      },
                }
            },
            {
                label: "Date",
                name: "Date",
                type: "text",
                placeholder:"DD/MM/YYYY",
                validation: {
                    required: "Date is required",
                    pattern: {
                        value: /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])\/(19|20)\d{2}/,
                        message: "Date must be valid",
                      },
                }
            },
            {
                label: "Location",
                name: "Location",
                type: "text",
                validation: {
                    required: "Location is required",
                    pattern: {
                        value: /[A-Za-z0-9'\.\-\s\,]/,
                        message: "Location must be valid",
                      },
                }
            },
            {
                label: "Website",
                name: "Website",
                placeholder: "https://github.com/johndoe",
                type: "text",
                validation: {
                    required: "Website is required",
                    pattern: {
                        value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
                        message: "Website must be valid",
                      },
                }
            },
            {


                label: "Summary",
                name: "summary",
                type: "textarea",
                validation: {
                    required: "Summary is required",
                    pattern: {
                        value: /[A-Za-z0-9'\.\-\s\,]/,
                        message: "Summary must be valid",
                      },
                }
              
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
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Institution must contain only alphabets",
                      },
                }
            },
            {
                label: "Area of Study",
                name: "Area of Study",
                type: "text",
                validation: {
                    required: "Area of Study is required",
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Area of Study must contain only alphabets",
                      },
                    
                }
            },
            {
                label: "Score",
                name: "Score",
                placeholder : "9.2 GPA",
                type: "text",
                validation: {
                    required: "Score is required",
                    pattern: {
                        value: /[-+]?[0-9]*\.?[0-9]*/,
                        message: "Score must contain only numbers",
                      },
                }
            },
            {
                label: "Date",
                name: "text",
                type: "text",
                validation: {
                    required: "Date is required",
                    pattern: {
                        value: /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])\/(19|20)\d{2}/,
                        message: "Date must be valid",
                      },
                }
            },
            {
                label: "Website",
                name: "Website",
                placeholder: "https://github.com/johndoe",
                type: "text",
                validation: {
                    required: "Website is required",
                    pattern: {
                        value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
                        message: "Website must be valid",
                      },
                }
            }, 
            {
                label: "Summary",
                name: "summary",
                type: "textarea",
                validation: {
                    required: "Summary is required",
                    pattern: {
                        value: /[A-Za-z0-9'\.\-\s\,]/,
                        message: "Summary must be valid",
                      },
                }
                
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
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name must contain only alphabets",
                      },
                }
            },
            {
                label: "Description",
                name: "Description",
                type: "text",
                validation: {
                    required: "Description is required",
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Description must contain only alphabets",
                      },
                }
            },
            {
                label: "Keywords",
                name: "Keywords",
                type: "text",
                validation: {
                    required: "Keywords is required",
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Keywords must contain only alphabets",
                      },
                }
              
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
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name must contain only alphabets",
                      },
                } 
            },
            {
                label: "Description",
                name: "Description",
                type: "text",
                validation: {
                    required: "Description is required",
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Description must contain only alphabets",
                      },
                    
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
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name must contain only alphabets",
                      },
                }
            },
            {
                label: "Description",
                name: "Description",
                type: "text",
                validation: {
                    required: "Description is required",
                    pattern: {
                        value:/^[A-Za-z\s]+$/,
                        message: "Description must contain only alphabets",
                      },
                }
            },
            {
                label: "Date",
                name: "Date",
                type: "text",
                validation: {
                    required: "Date is required",
                    pattern: {
                        value: /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])\/(19|20)\d{2}/,
                        message: "Date must be valid",
                      },
                }
            },
            {
                label: "Website",
                name: "Website",
                placeholder: "https://github.com/johndoe",
                type: "text",
                validation: {
                    required: "Website is required",
                    pattern: {
                        value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
                        message: "Website must be valid",
                      },
                }
            },
            {
                label: "Summary",
                name: "summary",
                type: "textarea",
                validation: {
                    required: "Summary is required",
                    pattern: {
                        value: /[A-Za-z0-9'\.\-\s\,]/,
                        message: "Summary must be valid",
                      },
                }
             
            },
            {
                label: "Keywords",
                name: "Keywords",
                type: "text",
                validation: {
                    required: "Keywords is required",
                    pattern: {
                        value:/^[A-Za-z\s]+$/,
                        message: "Keywords must contain only alphabets",
                      },
                }
               
            }
        ]
    }

]


export default Section;