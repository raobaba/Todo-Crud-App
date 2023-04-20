import { TABS } from '../Redux/actionType';
import { useDispatch } from 'react-redux';
import { toggleTab } from '../Redux/Action';
export default function Tabs({currentTab}) {
    const dispatch = useDispatch();
    return (
        TABS.map(tab => ( 
            <button
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tab))}
            >
                {tab}
            </button>
        ))
    )
}
