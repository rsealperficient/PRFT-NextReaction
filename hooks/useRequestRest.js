import { useEffect, useState } from 'react';
import axios from 'axios';

export const REQUEST_STATUS = {
	LOADING: 'loading',
	SUCCESS: 'success',
	FAILURE: 'failure',
};

const url = 'api/participants';

function useRequestRest() {
	const [data, setData] = useState([]);
	const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
	const [error, setError] = useState('');

	useEffect(() => {
		async function getAsync() {
			try {
				const result = await axios.get(url);
				setRequestStatus(REQUEST_STATUS.SUCCESS);
				setData(result.data);
			} catch (e) {
				setRequestStatus(REQUEST_STATUS.FAILURE);
				setError(e);
			}
		}
		getAsync();
	}, []);

	// function updateRecord(record, doneCallback) {
	//     const originalRecords = [...data];
	//     const newRecords = data.map(function (rec) {
	//         return rec.id === record.id ? record : rec;
	//     });

	//     async function updateAsync() {
	//         try {
	//             setData(newRecords);
	//             await axios.put(`${restUrl}/${record.id}`, record);
	//             if (doneCallback) {
	//                 doneCallback();
	//             }
	//         } catch (error) {
	//             console.log('error thrown inside updateAsync  ', error);
	//             if (doneCallback) {
	//                 doneCallback();
	//             }
	//             setData(originalRecords);
	//         }
	//     }
	//     updateAsync();
	// }

	// function deleteRecord(record, doneCallback) {
	//     const originalRecords = [...data];
	//     const newRecords = data.filter(function (rec) {
	//         return rec.id != record.id;
	//     });
	//     async function delayFunction() {
	//         try {
	//             setData(newRecords);
	//             await axios.delete(`${restUrl}/${record.id}`, record);
	//             if (doneCallback) {
	//                 doneCallback();
	//             }
	//         } catch (error) {
	//             console.log('error thrown inside delayFunction', error);
	//             if (doneCallback) {
	//                 doneCallback();
	//             }
	//             setData(originalRecords);
	//         }
	//     }
	//     delayFunction();
	// }

	return {
		data,
		requestStatus,
		error,
		// updateRecord,
		// insertRecord,
		// deleteRecord,
	};
}
export default useRequestRest;
