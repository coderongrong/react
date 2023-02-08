
function Link(props) {
    console.log('link', props)
    return (
        <div>{props.children} -- {props.user && props.user.permalink}</div>
    )
}

function Avatar(props) {
    // console.log('Avatar', props)
    return (
        <div>Avatar -- {props.user.permalink}</div>
    )
}

function PageLayout(props) {
    // console.log('PageLayout', props)
    return (
        <>
            <div>{props.topBar}</div>
            <div>{props.content}</div>
        </>
    )
}

function NavigationBar(props) {
    // console.log('PageLayout -->', props)
    return (
        <div>
            <div>{props.children}</div>
        </div>
    )
}

function Page(props) {
    const user = props.user;
    const content = <Link user={user} />;
    const topBar = (
        <NavigationBar>
            <Link href={user.permalink}>
                <Avatar user={user} size={props.avatarSize} />
            </Link>
        </NavigationBar>
    );
    return (
        <PageLayout
            topBar={topBar}
            content={content}
        />
    );
}

export default Page