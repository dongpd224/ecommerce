import styles from '../styles/SuggestionBar.module.css'

function SuggestionBar(){
    return(
        <div className={`container ${styles.suggestion_wrapper}`}>
            <div className={`${styles.suggestion_header}`}>
                <span>Gợi Ý Hôm Nay</span>
            </div>
        </div>
    )
}
export default SuggestionBar