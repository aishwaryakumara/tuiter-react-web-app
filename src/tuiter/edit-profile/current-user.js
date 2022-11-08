const initialState = {

    _id: '123',
    firstName: 'Aishwarya',
    lastName: 'Kumar',
    bannerimage: "../images/banne.jpeg",
    profilepic: 'Relativity_Black.jpeg',
    handle: '@aishwaryakumar',
    bio: 'Student, Software Engineer, AI, Space, and renewable enthusiast.\n'
         + ' Retuits and likes are not endorsements.\n',
    location:'Boston, MA',
    dob:'04 October 1996',
    dateJoined:'04 October 2009',
    followers:'200',
    following:'300',
    nooftuits: '6556',
    website: 'aishwarya@tuiter.com'
}

const currentUserReducer = () => {
    return initialState
}

export default currentUserReducer;