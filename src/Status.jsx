import React from "react";
import "./Priority.css";

const Card = (props) => {
    return (
      <div className="cardOutline">
          <h3> CAM-{props.cam} </h3>
          <h3> Name: {props.projectName} </h3>
        </div>
    );
  };
const Status =()=>{
    return (
        <div className="full-width-list">
        <ul className="hrow">
         <label htmlFor="">Backlog</label>
          <Card cam="7" projectName="Create Onboarding Tutorial for New Users"></Card>
          <Card cam="10" projectName="Conduct Security Vulnerability Assessment"></Card>
         
        </ul>
        <ul className="hrow">
         <label htmlFor="">To Do</label>
         <Card cam="1" projectName="Update User Profile Page UI"></Card>
         <Card cam="6" projectName="Third-Party Payment Gateway"></Card>
         <Card cam="9" projectName="Upgrade Server Infrastructure"></Card>
        </ul>
        <ul className="hrow">
         <label htmlFor="">In Progress</label>
         <Card cam="2" projectName="Add Multi-Language Support - Enable multi-language support within the application."></Card>
         <Card cam="3" projectName="Optimize Database Queries for Performance"></Card>
         <Card cam="4" projectName="Implement Email Notification System"></Card>
         <Card cam="5" projectName="Enhance Search Functionality"></Card>
         <Card cam="8" projectName="Implement Role-Based Access Control (RBAC)"></Card>
         
        </ul>
        <ul className="hrow">
         <label htmlFor="">Done</label>
        </ul>
        <ul className="hrow">
         <label htmlFor="">Cancelled</label>
        </ul>
    
     </div>
    )
}
export default Status;