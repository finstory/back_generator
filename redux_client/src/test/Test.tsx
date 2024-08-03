import { userActions } from "@/_common/redux";
import { useAppDispatch, useAppSelector } from "@/_common/redux/hooks/redux"
import { useSelector, useDispatch } from 'react-redux';
export const Test = () => {
    const user = useAppSelector(state => state.user.name);
    console.log(user);
    const dispatch = useAppDispatch();
    // dispatch(userSlice.actions.increment());
    return (
        <div
            onClick={() => dispatch(userActions.changeName("Hello"))}
            style={{
                position: 'absolute',
                top: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '2rem',
                padding: '1rem',
                backgroundColor: 'purple'
            }}
        >{user}</div>
    )
}
