
import React, {useEffect} from "react";
import "./Priority.css";
/*let data = {
    "tickets": [
        {
            "id": "CAM-1",
            "title": "Update User Profile Page UI",
            "tag": [
                "Feature request"
            ],
            "userId": "usr-1",
            "status": "Todo",
            "priority": 4
        },
        {
            "id": "CAM-2",
            "title": "Add Multi-Language Support - Enable multi-language support within the application.",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-2",
            "status": "In progress",
            "priority": 3
        },
        {
            "id": "CAM-3",
            "title": "Optimize Database Queries for Performance",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-2",
            "status": "In progress",
            "priority": 1
        },
        {
            "id": "CAM-4",
            "title": "Implement Email Notification System",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-1",
            "status": "In progress",
            "priority": 3
        },
        {
            "id": "CAM-5",
            "title": "Enhance Search Functionality",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-5",
            "status": "In progress",
            "priority": 0
        },
        {
            "id": "CAM-6",
            "title": "Third-Party Payment Gateway",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-2",
            "status": "Todo",
            "priority": 1
        },
        {
            "id": "CAM-7",
            "title": "Create Onboarding Tutorial for New Users",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-1",
            "status": "Backlog",
            "priority": 2
        },
        {
            "id": "CAM-8",
            "title": "Implement Role-Based Access Control (RBAC)",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-3",
            "status": "In progress",
            "priority": 3
        },
        {
            "id": "CAM-9",
            "title": "Upgrade Server Infrastructure",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-5",
            "status": "Todo",
            "priority": 2
        },
        {
            "id": "CAM-10",
            "title": "Conduct Security Vulnerability Assessment",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-4",
            "status": "Backlog",
            "priority": 1
        }
    ],
    "users": [
        {
            "id": "usr-1",
            "name": "Anoop sharma",
            "available": false
        },
        {
            "id": "usr-2",
            "name": "Yogesh",
            "available": true
        },
        {
            "id": "usr-3",
            "name": "Shankar Kumar",
            "available": true
        },
        {
            "id": "usr-4",
            "name": "Ramesh",
            "available": true
        },
        {
            "id": "usr-5",
            "name": "Suresh",
            "available": true
        }
    ]
}
*/

//let dObj = JSON.parse(data);

//console.log(dObj);
const Card = (props) => {
    return (
      <div className="cardOutline">
          <h3> CAM-{props.cam} </h3>
          <h3> Name: {props.projectName} </h3>
        </div>
    );
  };
const Priority =()=>{
    // const showTasks = async() => {
    //     const response = await fetch(data);
    //     const finaldata = await response.json();;
      
    // }
    useEffect(()=>{
       //    showTasks();
    },[]);
    return (
    <div className="full-width-list">
       <ul className="hrow">
        <label>No Priority</label>
        <Card cam="1" projectName="Update User Profile Page UI"></Card>
        
       </ul>
       <ul className="hrow">
        <label htmlFor="">Urgent</label>
        <Card cam="2" projectName="Add Multi-Language Support - Enable multi-language support within the application."></Card>
        <Card cam="4" projectName="Implement Email Notification System"></Card>
        <Card cam="8" projectName="Implement Role-Based Access Control (RBAC)"></Card>
        
       </ul>
       <ul className="hrow">
        <label htmlFor="">High</label>
        <Card cam="7" projectName=" Create Onboarding Tutorial for New Users"></Card>
        <Card cam="9" projectName="Upgrade Server Infrastructure"></Card>

       
       </ul>
       <ul className="hrow">
        <label htmlFor="">Medium</label>
        <Card cam="3" projectName="Optimize Database Queries for Performance"></Card>
        <Card cam="6" projectName="Third-Party Payment Gateway"></Card>
        <Card cam="10" projectName="Conduct Security Vulnerability Assessment"></Card>
       </ul>
       <ul className="hrow">
        <label htmlFor="">Low</label>
        <Card cam="5" projectName="Enhance Search Functionality"></Card>
        
       </ul>
   
    </div>
    )
}
export default Priority;