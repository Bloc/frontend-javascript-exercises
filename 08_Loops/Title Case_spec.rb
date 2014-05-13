describe "String" do
  describe "Title case" do
    it "capitalizes the first letter of each word" do
      "the great gatsby".title_case.should eq("The Great Gatsby")
    end
    it "works for words with mixed cases" do
      "liTTle reD Riding hOOD".title_case.should eq("Little Red Riding Hood")
    end
    it "ignores articles" do
      "The lord of the rings".title_case.should eq("The Lord of the Rings")
      "the sword and the stone".title_case.should eq("The Sword and the Stone")
      "the portrait of a lady".title_case.should eq("The Portrait of a Lady")
    end
    it "works for strings with all uppercase characters" do
      "THE SWORD AND THE STONE".title_case.should eq("The Sword and the Stone")
    end
  end
end