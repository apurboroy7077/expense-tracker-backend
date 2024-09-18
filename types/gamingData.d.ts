// Type for each question

// Type for the current question data
type questionData = {
  question: string;
  options: string[];
  correctAnswer: string;
  imageSrc?: string;
};

// Type for each user
type User = {
  name: string;
  id: string;
  score: number;
};

// Type for the main data structure
type RoomData = {
  roomName: string;
  roomId: string;
  currentQuestionData: questionData;
  allQuestions: Question[];
  usersData: User[];
  creationTime: number;
  gameRunningStatus?: "RUNNING" | "NOT_RUNNING";
  countDownTimerTime?: number;
};

// If the data is an array of RoomData
type RoomDataArray = RoomData[];
type gameDataType = RoomDataArray;

type dataFromClientForStoppingAndStartingGameType = {
  roomId: string;
  playerId: string;
};

type dataTypeForIncreasingPlayerScore = {
  roomId: string;
  playerId: string;
};
