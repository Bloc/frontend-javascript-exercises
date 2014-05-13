describe "Playlist" do
  describe "instance variables" do
    it "should be able to create a country playlist" do
      p = Playlist.new
      
      # Setters
      p.name = "Country"
      p.author = "Blake Shelton"
      p.song_list = ["Sure Be Cool If You Did", "God Gave Me You"]

      # Getters
      p.name.should eq("Country")
      p.author.should eq("Blake Shelton")
      p.song_list.should eq(["Sure Be Cool If You Did", "God Gave Me You"])
    end
    it "should be able to create a Rock playlist" do
      p = Playlist.new
      
      # Setters
      p.name = "Rock"
      p.author = "R&R"
      p.song_list = ["Radioactive", "Clouds"]

      # Getters
      p.name.should eq("Rock")
      p.author.should eq("R&R")
      p.song_list.should eq(["Radioactive", "Clouds"])
    end
  end
end

