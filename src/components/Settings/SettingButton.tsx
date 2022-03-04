interface ISettingsButton {
    click: Function,
}

const SettingsButton: React.FC<ISettingsButton> = (props: ISettingsButton) => {
    return (
        <div className='settings-button' onClick={() => props.click()}>
            <img className="settings-button-img" src='/img/icon/settings.svg' alt='settings' />
        </div>
    )
}

export default SettingsButton