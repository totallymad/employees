import EmplyeersListItem from '../employeers-list-item/employeers-list-item';
import './employeers-list.css';
 
const EmployeersList = () => {
    return (
        <ul className="app-list list-group">
            <EmplyeersListItem/>
            <EmplyeersListItem/>
            <EmplyeersListItem/>
        </ul>
    );
}

export default EmployeersList;