import { useEffect, useState } from 'react';
import axios from 'axios';

export const REQUEST_STATUS = {
	LOADING: 'loading',
	SUCCESS: 'success',
	FAILURE: 'failure',
};

const url = 'api/participants';

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function useRequestRest() {
	const [data, setData] = useState([]);
	const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
	const [error, setError] = useState('');

	async function getAsync() {
		try {
			await sleep(300);
			const result = await axios.get(url);
			console.log('result', result);
			setRequestStatus(REQUEST_STATUS.SUCCESS);
			setData(result.data);
		} catch (e) {
			setRequestStatus(REQUEST_STATUS.FAILURE);
			setError(e);
		}
	}

	useEffect(() => {
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

	async function deleteRecord(record, doneCallback) {
		async function deleteAsync() {
			try {
				const result = await axios.delete(
					`${url}/${record._id}`,
					record
				);
				console.log('delete result', result);
				await getAsync();

				if (doneCallback) {
					doneCallback();
				}
			} catch (error) {
				console.log('error thrown inside deleteAsync', error);
				if (doneCallback) {
					doneCallback();
				}
			}
		}

		deleteAsync();
	}

	return {
		data,
		requestStatus,
		error,
		// updateRecord,
		// insertRecord,
		deleteRecord,
		setData,
	};
}
export default useRequestRest;
