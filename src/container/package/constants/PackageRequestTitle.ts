export const PackageRequestTitle = (status : string) => {
    switch(status){
        case 'approved' :
            return 'has approved your package request'
        case 'rejected' : 
            return 'has declined your package request'
        case 'pending':
            return ''
        default :
            return status
    }
}

export const PackageRequestSubTitle = (status : string) => {
    switch(status){
        case 'approved' :
            return 'You can now access the client center'
        case 'rejected' : 
            return 'You request is not accepted'
        case 'pending':
            return 'Your request is pending'
        default :
            return status
    }
}