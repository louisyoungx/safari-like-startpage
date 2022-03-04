import { connect } from 'react-redux'
import { settingDisplayChange } from '../../store/actions'
import './index.css'
import SettingsButton from './SettingButton'
import SettingsBar from './SettingsBar'

let Settings: React.FC = (props: any) => {
    const open = () => {
        setTimeout(() => {
            props.settingDisplayChange(!props.settingDisplay)
        }, 0)
    }
    return (
        <div className='settings'>
            <SettingsBar display={props.settingDisplay} switchWallpaper={() => {}} />
            <SettingsButton click={open} />
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        settingDisplay: state.settingDisplay,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        settingDisplayChange: (tag: boolean) => {
            console.log('setting', tag)
            dispatch(settingDisplayChange(tag))
        },
    }
}

Settings = connect(mapStateToProps, mapDispatchToProps)(Settings)

export default Settings
