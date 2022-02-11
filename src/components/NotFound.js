export function NotFound(){
    console.log('in NotFound Component');
    return (
        <>
            <h1>404 Not Found</h1>
            <p>Oops! We couldn't find the thing that you are asking for. Sorry about that!</p>
            <p>May be try one of these instead?</p>
            <ul>
                <li><a href="/">Find a movie</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/account">Register</a></li>
            </ul>
        </>
    )
}