import { connect } from 'react-redux'

function Layout({children}){
    return(
        <div>
            {children}
        </div>
    )
}

const mapStateProps = state=>({

})

export default connect(mapStateProps, {
    
}) (Layout);