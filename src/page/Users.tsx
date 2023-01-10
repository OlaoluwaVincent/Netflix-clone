import UserBox from '../components/UserBox';
type Props = {
	names: string[];
};

function Users() {
	const name = 'User';
	return (
		<div className='usersContainer page'>
			<section className='intro'>
				<p className='intro-header'>
					Hi there, my gorgeous friends on the internet
				</p>
				<p className='intro-body'>
					This app uses data from the TMDB Api, it was designed to
					exercise my skills as a practical work. <br />
				</p>
				<p className='intro-info'>
					<ul>
						<b>Note:</b>
						<li>You cannot watch the actual movie here</li>
						<li>
							You can only watch the trailer of the movie{' '}
							<i>if</i> available
						</li>
					</ul>
				</p>
			</section>
			<div className='userBoxes'>
				<UserBox userName={name} />
			</div>
		</div>
	);
}

export default Users;
