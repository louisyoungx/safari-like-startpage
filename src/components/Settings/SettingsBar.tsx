import { connect } from "react-redux"
import wallpaper from "../../config/wallpaper"
import { switchWallpaper } from "../../store/actions"

interface ISettingsBar {
    display: boolean,
    switchWallpaper: Function,
}

let SettingsBar: React.FC<ISettingsBar> = (props: ISettingsBar) => {
    return (
        <div
            className='settings-bar'
            style={{ display: props.display ? 'block' : 'none' }}
        >
            <div className='settings-bar-item settings-bar-imgs'>
                {wallpaper.map((item, index) => (
                    <div className='settings-bar-img-container'>
                        <img
                            className='settings-bar-img'
                            src={item.url}
                            alt='wallpaper'
                            onClick={() => props.switchWallpaper(item.url)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return { wallpaper: state.wallpaper }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        switchWallpaper: (url: string) => {
            dispatch(switchWallpaper(url))
        },
    }
}

SettingsBar = connect(mapStateToProps, mapDispatchToProps)(SettingsBar)

export default SettingsBar
