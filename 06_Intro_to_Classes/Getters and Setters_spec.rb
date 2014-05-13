describe "Book" do
  describe "instance variables" do
    it "should be able get and set the title to 'LOTR'" do
      b = Book.new
      # Ability to get/set title
      b.title = "LOTR"
      b.title.should eq("LOTR")
      # Ability to get/set pages
      b.pages = 1000
      b.pages.should eq(1000)
      # Ability to get/set author
      b.author = "J. R. R. Tolkien"
      b.author.should eq("J. R. R. Tolkien")
    end
    it "should be able to set the title to 'Hitchhiker's Guide'" do
      b = Book.new
      # Ability to get/set title
      b.title = "Hitchhiker's Guide"
      b.title.should eq("Hitchhiker's Guide")
      # Ability to get/set pages
      b.pages = 700
      b.pages.should eq(700)
      # Ability to get/set author
      b.author = "Douglas Adams"
      b.author.should eq("Douglas Adams")
    end
  end
end


