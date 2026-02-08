import { useEffect, useState } from 'react';

const useStudyData = () => {
    const [studyData, setStudyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudyData = async () => {
            try {
                const response = await fetch('/api/study-data');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStudyData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudyData();
    }, []);

    return { studyData, loading, error };
};

export default useStudyData;