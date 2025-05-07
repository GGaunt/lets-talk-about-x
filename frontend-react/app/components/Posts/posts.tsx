// app/components/Posts/posts.tsx
import { useEffect, useState } from 'react';
import './posts.css';

export function Posts() {
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
        <div className="posts-container">
            {error && <p className="error">🔥 {error}</p>}
            {data?.map(({ content, post_id, user_id, username }) => (
                <div key={post_id} className="post-card">
                    <div className="post-meta">
                        <span>#{post_id} by <strong>{username}</strong> (User {user_id})</span>
                    </div>
                    <p className="post-content">{content}</p>
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
