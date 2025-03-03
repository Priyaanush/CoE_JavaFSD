import java.util.*;

// Enum representing room features
enum RoomFeature {
    PROJECTOR,
    VIDEO_CONFERENCING,
    WHITEBOARD,
    CONFERENCE_PHONE,
    AIR_CONDITIONING
}

// Class representing a meeting room
class MeetingRoom {
    private String roomId;
    private String roomName;
    private int capacity;
    private EnumSet<RoomFeature> features;

    public MeetingRoom(String roomId, String roomName, int capacity, EnumSet<RoomFeature> features) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.capacity = capacity;
        this.features = features;
    }

    public String getRoomId() {
        return roomId;
    }

    public String getRoomName() {
        return roomName;
    }

    public EnumSet<RoomFeature> getFeatures() {
        return features;
    }

    @Override
    public String toString() {
        return roomName;
    }
}

// Class to manage room scheduling
class RoomScheduler {
    private Map<String, MeetingRoom> rooms;

    public RoomScheduler() {
        this.rooms = new HashMap<>();
    }

    public void addMeetingRoom(MeetingRoom room) {
        rooms.put(room.getRoomId(), room);
        System.out.println("Room added: " + room.getRoomName() + ", ID: " + room.getRoomId());
    }

    public String bookRoom(String roomId, EnumSet<RoomFeature> requiredFeatures) {
        MeetingRoom room = rooms.get(roomId);
        if (room != null && room.getFeatures().containsAll(requiredFeatures)) {
            return "Room " + roomId + " booked successfully.";
        } else {
            return "Room " + roomId + " does not meet the required features.";
        }
    }

    public List<String> listAvailableRooms(EnumSet<RoomFeature> requiredFeatures) {
        List<String> availableRooms = new ArrayList<>();
        for (MeetingRoom room : rooms.values()) {
            if (room.getFeatures().containsAll(requiredFeatures)) {
                availableRooms.add(room.getRoomName());
            }
        }
        return availableRooms;
    }
}

// Testing the RoomScheduler
public class MeetingRoomSchedulerTest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        RoomScheduler scheduler = new RoomScheduler();

        System.out.print("Enter number of rooms: ");
        int numRooms = scanner.nextInt();
        scanner.nextLine(); // Consume newline

        for (int i = 0; i < numRooms; i++) {
            System.out.print("Enter Room ID: ");
            String roomId = scanner.nextLine();
            System.out.print("Enter Room Name: ");
            String roomName = scanner.nextLine();
            System.out.print("Enter Capacity: ");
            int capacity = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            System.out.print("Enter features (comma-separated, e.g., PROJECTOR,WHITEBOARD): ");
            String[] featuresInput = scanner.nextLine().split(",");
            EnumSet<RoomFeature> features = EnumSet.noneOf(RoomFeature.class);
            for (String feature : featuresInput) {
                try {
                    features.add(RoomFeature.valueOf(feature.trim().toUpperCase()));
                } catch (IllegalArgumentException e) {
                    System.out.println("Invalid feature: " + feature);
                }
            }

            scheduler.addMeetingRoom(new MeetingRoom(roomId, roomName, capacity, features));
        }

        System.out.print("Enter Room ID to book: ");
        String bookRoomId = scanner.nextLine();
        System.out.print("Enter required features for booking (comma-separated): ");
        String[] bookFeaturesInput = scanner.nextLine().split(",");
        EnumSet<RoomFeature> bookFeatures = EnumSet.noneOf(RoomFeature.class);
        for (String feature : bookFeaturesInput) {
            try {
                bookFeatures.add(RoomFeature.valueOf(feature.trim().toUpperCase()));
            } catch (IllegalArgumentException e) {
                System.out.println("Invalid feature: " + feature);
            }
        }

        System.out.println(scheduler.bookRoom(bookRoomId, bookFeatures));

        System.out.print("Enter required features to list available rooms (comma-separated): ");
        String[] listFeaturesInput = scanner.nextLine().split(",");
        EnumSet<RoomFeature> listFeatures = EnumSet.noneOf(RoomFeature.class);
        for (String feature : listFeaturesInput) {
            try {
                listFeatures.add(RoomFeature.valueOf(feature.trim().toUpperCase()));
            } catch (IllegalArgumentException e) {
                System.out.println("Invalid feature: " + feature);
            }
        }

        System.out.println("Available rooms with specified features: " + scheduler.listAvailableRooms(listFeatures));

        scanner.close();
    }
}
