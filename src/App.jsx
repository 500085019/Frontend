import React, {useState , useEffect} from 'react'
import PreviewModal from './components/PreviewModal'
import DropdownForm from './components/Dropdown'
import axios from 'axios'
import './App.css'

const  App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [formData, setFormData] = useState({

    folderName: '',
    fileName: '',
    letterHead: '',
    createType: '',
    legalPerson: '',
    rozanamaType: '',
    hearingType: '',
    claimantcompany: '',
    socFile: '',
    noticeDate: ''
  });
  const [file , setFile] = useState(null);
  const bucketName = import.meta.env.VITE_APP_BUCKET_NAME;
const folderName = import.meta.env.VITE_APP_FOLDER_NAME;
const fileName = import.meta.env.VITE_APP_FILE_NAME;


const handleFilechange = (e) => {
  setFile(e.target.value)
}

  const handleCreateAll = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    //setModalIsOpen(true);
    try {
      const response = await axios.post("https://gfp6wzlori.execute-api.ap-south-1.amazonaws.com/dev/createRozanamaNotice", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      setdata(response.data);
      console.log("Response Recieved Successfully", response.data);

      alert("Data saved successfully");
    }
    catch (error) {
      setdata(null);
      console.error("Error sending data", error)



    }

  };
  const handleDownloadAll = () => {
    console.log("Download All Clicked");
    //setModalIsOpen(true);
    //alert("Download button clicked!!")


  };
  const handlePreview = async () => {

    //alert("Preview button clicked!");
    setModalIsOpen(true);
    // https://gfp6wzlori.execute-api.ap-south-1.amazonaws.com/dev/createRozanamaNotice
  }



  const handleCcChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "name, value");
    setFormData((prev) => ({
      ...prev,
      claimantcompany: value
    }))
  };

  const handleLegalNameChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "name, value");

    setFormData((prev) => ({
      ...prev,
      legalPerson: value
    }));
  };
  const handleNoticeDateChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "name, value");

    setFormData((prev) => ({
      ...prev,
      noticeDate: value
    }));
  }
  const handleFolderNameChange = (e) => { // spread operator is used 
    const { name, value } = e.target;
    console.log(name, value, "name, value");
    setFormData((prev) => ({
      ...prev,
      folderName: value

    }))

  }
  const handleUpload = async () => {
   console.log("Upload Button  Clicked");
    

    try {
    console.log("Bucket Name:", import.meta.env.VITE_APP_BUCKET_NAME);
    console.log("Folder Name:", import.meta.env.VITE_APP_FOLDER_NAME);
    console.log("File Name:", import.meta.env.VITE_APP_FILE_NAME);
     console.log("Making API call to get presigned URL...");

      const  {data}  = await axios.post("https://gfp6wzlori.execute-api.ap-south-1.amazonaws.com/dev/csvUploadTos3Api",

        {
          bucketName: bucketName,
          folderName: folderName,
          fileName: fileName, 

        });
    //    console.log("Upload Button  Clicked");

      console.log(data, "Data recieved");

      

      if (!data.presignedUrl) {
        throw new Error("Failed to get presigned URL");
      }

      await axios.put(data.presignedUrl, file, {
        headers: {
          "Content-Type": "text/csv",
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100 / progressEvent.total));

          setUploadProgress(progress);
        }

      });
      setTimeout(() => {
        setUploadProgress(0);

      }, 1000);

    }
    catch (error) {
      console.log("Error Occurred ", error);
      alert("Failed to upload file");
    }}
    
    //   alert("Button clicked!!")
  
  const createTypeOption = ["Select Option","one","all"];
  const letterheadOption = ["Select Option","Delhi", "Mumbai", "Pune", "Thane", "Gurgaon", "Chennai", "Ahmedabad", "Ambernath"];
  const hearingTypeOption = ["Select Option","Virtual Hearing", "Physical Hearing", "Both"];
  const disputeTypeOption = ["Select Option","Arbitration", "Conciliation"];
  const StatementofClaimantOption = ["Select Option","yes", "no"];
console.log(file,"file");
  const HandleFilechange = (e) => {
    setFile(e.target.files[0]);

    const { name, value } = e.target;
    console.log(name, value, "name, value");
    setFormData((prev) => ({
      ...prev,
      fileName: value
    }))

    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "text/csv") {
      // setFile(selectedFile.name);
      setFormData((prev) => ({
        ...prev,
        fileName: selectedFile.name
      }))
      // alert(`File "${selectedFile.name}" uploaded successfully`);
      console.log("File selected successfully:", selectedFile.name);
    } else {
      alert("Please upload a CSV file");
    }
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "name, value");
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    // setSelectedOption(selectedValue);
    console.log("Selected option:", formData);
  };
  // console.log(formData, "formdata");
  useEffect(() => {
    console.log(formData, "formdata");
  }, [formData])

  return (
<div className="d-flex flex-column justify-content-center align-items-center vh-100 vw-100 bg-light p-5">
  <div
    className="bg-white p-5 rounded shadow-sm text-center w-100"
    style={{ maxWidth: "900px", height: "90vh", overflowY: "auto" }}
  >
    <h1 className="h2 fw-bold mb-4">CSV Uploader</h1>
    <form>
      <input
        type="file"
        name="filename"
        onChange={HandleFilechange}
        accept=".csv"
        className="form-control mb-3"
        style={{
          fontSize: "16px",
          color: "#6b7280",
          padding: "12px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      />
    </form>

    <DropdownForm
      createType={createTypeOption}
      letterHead={letterheadOption}
      hearingType={hearingTypeOption}
      disputeType={disputeTypeOption}
      StatementofClaimant={StatementofClaimantOption}
      onDropdownchange={handleDropdownChange}
      fieldNames={["createType", "letterHead", "hearingType", "rozanamaType", "socFile", "noticeDate", "filename", "claimantcompany", "legalPerson", "folderName"]}
    />

    <div className="mt-4 text-start">
      <label
        htmlFor="noticeDate"
        className="form-label"
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#333",
          marginBottom: "8px",
        }}
      >
        noticeDate
      </label>
      <input
        type="date"
        name="noticeDate"
        id="noticeDate"
        onChange={handleNoticeDateChange}
        className="form-control"
        style={{
          padding: "12px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          fontSize: "16px",
          color: "#333",
        }}
      />
    </div>

    <div className="mt-4 text-start">
      <label
        htmlFor="cc"
        className="form-label"
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#333",
          marginBottom: "8px",
        }}
      >
        Enter claimantcompany
      </label>
      <input
        type="text"
        name="claimantcompany"
        id="cc"
        placeholder="Write name"
        onChange={handleCcChange}
        className="form-control"
        style={{
          padding: "12px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          fontSize: "16px",
          color: "#333",
        }}
      />
    </div>

    <div className="mt-4 text-start">
      <label
        htmlFor="legalName"
        className="form-label"
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#333",
          marginBottom: "8px",
        }}
      >
        Enter legal Person
      </label>
      <input
        type="text"
        name="legalPerson"
        id="legalName"
        placeholder="Write Legal Name"
        onChange={handleLegalNameChange}
        className="form-control"
        style={{
          padding: "12px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          fontSize: "16px",
          color: "#333",
        }}
      />
    </div>

    <div className="mt-4 text-start">
      <label
        htmlFor="folder"
        className="form-label"
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#333",
          marginBottom: "8px",
        }}
      >
        Enter Folder Name
      </label>
      <input
        type="text"
        id="folder"
        name="folderName"
        placeholder="Write Folder Name"
        onChange={handleFolderNameChange}
        className="form-control"
        style={{
          padding: "12px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          fontSize: "16px",
          color: "#333",
        }}
      />
    </div>

    <div
      className="position-absolute bottom-0 start-0 m-3 d-flex gap-2"
      style={{ gap: "10px" }}
    >
      <button
        onClick={handlePreview}
        className="btn"
        style={{
          backgroundColor: "#F59E0B",
          color: "white",
          fontWeight: "bold",
          padding: "12px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Preview
      </button>
      <button
        onClick={handleUpload}
        className="btn"
        style={{
          backgroundColor: "#3B82F6",
          color: "white",
          fontWeight: "bold",
          padding: "12px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Upload
      </button>
      {uploadProgress > 0 && (
        <div className="mt-2 w-100">
          <p>Upload Progress: {uploadProgress}%</p>
          <div
            className="progress"
            style={{ height: "10px", backgroundColor: "#ddd", borderRadius: "4px" }}
          >
            <div
              className="progress-bar"
              style={{
                width: `${uploadProgress}%`,
                backgroundColor: "#3B82F6",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      )}
    </div>

    <div
      className="position-absolute bottom-0 end-0 m-3 d-flex gap-2"
      style={{ gap: "10px" }}
    >
      <button
        onClick={handleCreateAll}
        className="btn"
        style={{
          backgroundColor: "#10B981",
          color: "white",
          fontWeight: "bold",
          padding: "12px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Create All
      </button>
      <button
        onClick={handleDownloadAll}
        className="btn"
        style={{
          backgroundColor: "#3B82F6",
          color: "white",
          fontWeight: "bold",
          padding: "12px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Download All
      </button>
    </div>
    <br />
    <br />
  </div>
  <PreviewModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
</div>
  )
}

export default App