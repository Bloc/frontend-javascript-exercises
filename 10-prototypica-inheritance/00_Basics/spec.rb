describe "Book" do
  describe "description" do
    it "should return title and author in description" do
      book = Book.new
      book.title_and_author("Ender's Game","Orson Scott Card")
      book.description.should eq("Ender's Game was written by Orson Scott Card")
    end
  end
end





