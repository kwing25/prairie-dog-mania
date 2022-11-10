// imports go here
import {makeStyles} from 'tss-react/mui' // https://www.tss-react.dev/


const TempSummaryAlt = () => {

    const {classes} = useStyles(
		{}
	)

    return (
        <div className={classes.wrapper}></div>
    )
    
}

// TSS Styles go here

const useStyles = makeStyles()((_, props) => ({

	wrapper: {
		height: '100%',
        width: '100%'
	}
}))


export default TempSummaryAlt