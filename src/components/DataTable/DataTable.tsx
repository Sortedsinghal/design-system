import React, { useState, useEffect, useRef } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  details?: string;
};

const mockData: User[] = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', details: 'Alice manages admin accounts and permissions.' },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', details: 'Bob is a regular user responsible for content creation.' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor', details: 'Charlie oversees editorial workflows.' },
  { id: 4, name: 'David Green', email: 'david@example.com', role: 'Viewer', details: 'David has read-only access.' },
  { id: 5, name: 'Eve Stone', email: 'eve@example.com', role: 'Admin', details: 'Eve handles finance admin tasks.' },
];

const PAGE_SIZE = 2;

const DataTable: React.FC = () => {
  const [data] = useState<User[]>(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [filterRole, setFilterRole] = useState<string>('All');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  const filteredData = filterRole === 'All' ? data : data.filter((user) => user.role === filterRole);
  const paginatedData = filteredData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!checkboxRef.current) return;
    if (selectedRows.length === 0) {
      checkboxRef.current.indeterminate = false;
    } else if (selectedRows.length < paginatedData.length) {
      checkboxRef.current.indeterminate = true;
    } else {
      checkboxRef.current.indeterminate = false;
    }
  }, [selectedRows, paginatedData.length]);

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map(user => user.id));
    }
  };

  const toggleRowSelection = (id: number) => {
    setSelectedRows(prev => prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]);
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">User Table</h2>
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium">Filter by Role:</label>
          <select
            value={filterRole}
            onChange={(e) => {
              setFilterRole(e.target.value);
              setCurrentPage(1);
            }}
            className="border p-1 rounded text-sm"
          >
            <option value="All">All</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>
      </div>

      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">
              <input
                type="checkbox"
                ref={checkboxRef}
                checked={selectedRows.length === paginatedData.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            [...Array(PAGE_SIZE)].map((_, index) => (
              <tr key={index} className="animate-pulse border-b">
                <td className="p-2"><div className="h-4 w-4 bg-gray-300 rounded"></div></td>
                <td className="p-2"><div className="h-4 w-24 bg-gray-300 rounded"></div></td>
                <td className="p-2"><div className="h-4 w-36 bg-gray-300 rounded"></div></td>
                <td className="p-2"><div className="h-4 w-16 bg-gray-300 rounded"></div></td>
              </tr>
            ))
          ) : (
            paginatedData.map(user => (
              <React.Fragment key={user.id}>
                <tr
                  className="border-b hover:bg-gray-50 cursor-pointer transition"
                  onClick={() => toggleRow(user.id)}
                >
                  <td className="p-2">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(user.id)}
                      onChange={(e) => {
                        e.stopPropagation();
                        toggleRowSelection(user.id);
                      }}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.role}</td>
                </tr>
                {expandedRow === user.id && (
                  <tr className="bg-gray-50 transition-all duration-300">
                    <td colSpan={4} className="p-2 text-gray-600">{user.details}</td>
                  </tr>
                )}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;