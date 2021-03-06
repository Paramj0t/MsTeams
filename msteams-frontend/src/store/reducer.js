import Actions from "./actions";

const initState = {
	identity: "",
	isRoomHost: false,
	connectOnlyWithAudio: false,
	roomId: null,
	isChatActive: false,
	isParticipantsActive: false,
	twilioAccessToken: null,
	showOverlay: true,
	participants: [],
	messages: [],
	userName: "",
	image: "",
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case Actions.SET_IDENTITY:
			return {
				...state,
				identity: action.identity,
			};
		case Actions.SET_IS_ROOM_HOST:
			return {
				...state,
				isRoomHost: action.isRoomHost,
			};
		case Actions.SET_CONNECT_ONLY_WITH_AUDIO:
			return {
				...state,
				connectOnlyWithAudio: action.onlyWithAudio,
			};
		case Actions.SET_ROOM_ID:
			return {
				...state,
				roomId: action.roomId,
			};
		case Actions.CHATTING:
			return {
				...state,
				isChatActive: action.isChatActive,
			};
		case Actions.PARTICIPANTS:
			return {
				...state,
				isParticipantsActive: action.isParticipantsActive,
			};
		case Actions.SET_TWILIO_ACCESS_TOKEN:
			return {
				...state,
				twilioAccessToken: action.token,
			};
		case Actions.SET_SHOW_OVERLAY:
			return {
				...state,
				showOverlay: action.showOverlay,
			};
		case Actions.SET_PARTICIPANTS:
			return {
				...state,
				participants: action.participants,
			};
		case Actions.SET_MESSAGES:
			return {
				...state,
				messages: action.messages,
			};
		case Actions.SET_USER_NAME:
			return {
				...state,
				userName: action.userName,
			};
		case Actions.SET_IMAGE:
			return {
				...state,
				image: action.image,
			};
		default:
			return state;
	}
};

export default reducer;
