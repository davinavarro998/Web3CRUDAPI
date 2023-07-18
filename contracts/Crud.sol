// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;


contract Crud {

    struct Message {
        uint256 id;
        string content;
        uint256 timestamp;
        bool isVerified;
    }

    address public owner;

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "You are not the owner");
        _;
    }

    Message[] public messages;

    event MessageAdded(uint256 _id, string _content, uint256 _timestamp);
    event MessageVerified(uint256 _id, uint256 _timestamp);

    function readMessages() public view returns (Message[] memory){
        return messages;
    }

    function addMessage(string calldata _content) public onlyOwner(){
        uint256 _id = messages.length + 1;
        uint256 _timestamp = block.timestamp;

        Message memory newMessage = Message({
            id:_id,
            content:_content,
            timestamp:_timestamp,
            isVerified:false
        });
        messages.push(newMessage);
        emit MessageAdded(_id, _content, _timestamp);
    }

    function verifyMessage(uint256 _id) public onlyOwner() returns(bool){
        uint256 timestamp = block.timestamp;
        for (uint256 i = 0; i < messages.length; i++) {
            if(messages[i].id == _id) {
                messages[i].isVerified = true;
                break;
            }
        }
        emit MessageVerified(_id, timestamp);
        return true;
    }

    function deleteMessage(uint256 _id) public onlyOwner() {
    
        // Find the index of the message with the given ID
        uint256 indexToDelete;
        for (uint256 i = 0; i < messages.length; i++) {
            if (messages[i].id == _id) {
                indexToDelete = i;
                break;
            }
        }

        // Ensure that the message with the given ID was found
        require(messages[indexToDelete].id == _id, "Message not found");

        // Remove the message from the array by shifting elements
        for (uint256 i = indexToDelete; i < messages.length - 1; i++) {
            messages[i] = messages[i + 1];
        }
        messages.pop();
    }
}