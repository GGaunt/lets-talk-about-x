import { useEffect, useState } from 'react';

export function Welcome() {
    const [data, setData] = useState<Post[] | null>(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then((response) => {
                if (!response.ok) throw new Error('API failed to obey!');
                return response.json();
            })
            .then((data) => setData(data))
            .catch((err) => setError(err.message));
    }, []);
    return (
        <div>
                {data?.map(({content, post_id, user_id, username}) => (
                    <div>
                        <span>{post_id} {user_id} {username}</span>
                        <p>{content}</p>
                    </div>
                ))}
        </div>
    );
}

type Post = {
    content: string;
    post_id: number;
    user_id: number;
    username: string;
};