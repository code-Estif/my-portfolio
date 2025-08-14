[1mdiff --git a/graphite-demo/frontend.jsx b/graphite-demo/frontend.jsx[m
[1mnew file mode 100644[m
[1mindex 0000000..dd6a2a3[m
[1m--- /dev/null[m
[1m+++ b/graphite-demo/frontend.jsx[m
[36m@@ -0,0 +1,56 @@[m
[32m+[m[32mimport React, { useEffect, useState } from 'react';[m
[32m+[m
[32m+[m[32mconst TaskSearch = () => {[m
[32m+[m[32m  const [tasks, setTasks] = useState([]);[m
[32m+[m[32m  const [loading, setLoading] = useState(true);[m
[32m+[m[32m  const [error, setError] = useState(null);[m
[32m+[m[32m  const [searchQuery, setSearchQuery] = useState('');[m
[32m+[m
[32m+[m[32m  useEffect(() => {[m
[32m+[m[32m    setLoading(true);[m
[32m+[m[32m    fetch(`/search?query=${encodeURIComponent(searchQuery)}`)[m
[32m+[m[32m      .then(response => {[m
[32m+[m[32m        if (!response.ok) {[m
[32m+[m[32m          throw new Error('Network response was not ok');[m
[32m+[m[32m        }[m
[32m+[m[32m        return response.json();[m
[32m+[m[32m      })[m
[32m+[m[32m      .then(data => {[m
[32m+[m[32m        setTasks(data);[m
[32m+[m[32m        setLoading(false);[m
[32m+[m[32m      })[m
[32m+[m[32m      .catch(error => {[m
[32m+[m[32m        setError(error.message);[m
[32m+[m[32m        setLoading(false);[m
[32m+[m[32m      });[m
[32m+[m[32m  }, [searchQuery]); // Depend on searchQuery[m
[32m+[m
[32m+[m[32m  if (loading) {[m
[32m+[m[32m    return <div>Loading...</div>;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  if (error) {[m
[32m+[m[32m    return <div>Error: {error}</div>;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div>[m
[32m+[m[32m      <h2>Task Search</h2>[m
[32m+[m[32m      <input[m
[32m+[m[32m        type="text"[m
[32m+[m[32m        placeholder="Search tasks..."[m
[32m+[m[32m        value={searchQuery}[m
[32m+[m[32m        onChange={(e) => setSearchQuery(e.target.value)}[m
[32m+[m[32m      />[m
[32m+[m[32m      <ul>[m
[32m+[m[32m        {tasks.map(task => ([m
[32m+[m[32m          <li key={task.id}>[m
[32m+[m[32m            <p>{task.description}</p>[m
[32m+[m[32m          </li>[m
[32m+[m[32m        ))}[m
[32m+[m[32m      </ul>[m
[32m+[m[32m    </div>[m
[32m+[m[32m  );[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default TaskSearch;[m
\ No newline at end of file[m
