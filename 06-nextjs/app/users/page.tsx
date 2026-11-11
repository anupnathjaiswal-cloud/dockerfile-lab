const users = [
    { id: 1, name: "Anup" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Amit" },
];

export default function Users() {
    return (
        <main>
            <h1>Users</h1>

            {users.map((user) => (
                <p key={user.id}>
                    {user.id}. {user.name}
                </p>
            ))}
        </main>
    );
}
