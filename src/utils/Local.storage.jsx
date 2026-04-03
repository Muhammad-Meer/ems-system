
 const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Landing Page",
        "description": "Create UI for homepage",
        "date": "2026-04-01",
        "category": "design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Navbar Bug",
        "description": "Resolve responsive issue",
        "date": "2026-04-02",
        "category": "dev",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Meeting",
        "description": "Discuss requirements",
        "date": "2026-04-03",
        "category": "meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "API Integration",
        "description": "Connect frontend with backend",
        "date": "2026-04-01",
        "category": "dev",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Bug Fixing",
        "description": "Fix login issue",
        "date": "2026-04-02",
        "category": "dev",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Write Docs",
        "description": "Prepare API docs",
        "date": "2026-04-03",
        "category": "documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "UI सुधार",
        "description": "Improve button styles",
        "date": "2026-04-01",
        "category": "design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Testing",
        "description": "Test all modules",
        "date": "2026-04-02",
        "category": "qa",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Database Setup",
        "description": "Setup MongoDB",
        "date": "2026-04-01",
        "category": "backend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Optimize Queries",
        "description": "Improve DB performance",
        "date": "2026-04-02",
        "category": "backend",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix Crash",
        "description": "Resolve server crash",
        "date": "2026-04-03",
        "category": "bug",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Deploy App",
        "description": "Deploy to production",
        "date": "2026-04-01",
        "category": "devops",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Monitor Logs",
        "description": "Check server logs",
        "date": "2026-04-02",
        "category": "devops",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
]

const admin = [{

    "id": 1,
    "email": "admin1@example.com",
    "password": "123"
  }]

export   const  setLocalfunc = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
}

export   const  getLocalfunc = () => {

}
